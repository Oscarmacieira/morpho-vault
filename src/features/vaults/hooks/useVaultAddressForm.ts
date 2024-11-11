"use client";

import { rainbowConfig } from "@/lib/rainbow-config";
import { siteConfig } from "@/lib/site-config";
import { readMetaMorphoFactoryIsMetaMorpho } from "@/lib/wagmi-cli/generated";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, UseFormReturn } from "react-hook-form";
import { useDebounceCallback } from "usehooks-ts";
import { Address, isAddress } from "viem";
import { z } from "zod";

/**
 * @returns {Object} - Returns an object with the following properties:
 *   - `address` - The address of the vault.
 *   - `isTyping` - A boolean indicating if the user is typing.
 *   - `isAddressDirty` - A boolean indicating if the address is dirty.
 *   - `isAddressInvalid` - A boolean indicating if the address is invalid.
 *   - `form` - The form object.
 *   - `addressValue` - The address value.
 *   - `handleChange` - A function to handle the change of the address.
 *   - `reset` - A function to reset the form.
 */
const VaultAddressFormSchema = z.object({
  address: z.string().superRefine(async (val, ctx) => {
    if (!isAddress(val)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Input is not a valid address",
      });
      return;
    }

    const isMetaMorpho = await readMetaMorphoFactoryIsMetaMorpho(
      rainbowConfig,
      {
        args: [val],
      },
    );

    if (!isMetaMorpho) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Address is not a valid MetaMorpho vault",
      });
    }
  }),
});

export type VaultAddressFormSchema = z.infer<typeof VaultAddressFormSchema>;

type UseVaultAddressFormReturn = {
  isTyping: boolean;
  isAddressDirty: boolean;
  isAddressInvalid: boolean;
  form: UseFormReturn<VaultAddressFormSchema>;
  addressValue: Address | null;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof VaultAddressFormSchema,
  ) => void;
  reset: () => void;
};

export function useVaultAddressForm(): UseVaultAddressFormReturn {
  const [addressValue, setAddressValue] = useState<Address | null>(null);
  const [isTyping, setIsTyping] = useState<boolean>(false);

  const debounced = useDebounceCallback(
    setAddressValue,
    siteConfig.debounceTime,
  );

  const form = useForm<VaultAddressFormSchema>({
    resolver: zodResolver(VaultAddressFormSchema),
    mode: "onChange",
  });

  const { getFieldState, setValue, trigger, clearErrors, formState } = form;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    fieldName: keyof VaultAddressFormSchema,
  ) => {
    const address = e.target.value as Address;
    setValue(fieldName, address, {
      shouldDirty: true,
      shouldValidate: false,
    });
    setIsTyping(true);
    debounced(address);
  };

  useEffect(() => {
    if (addressValue) {
      trigger("address");
    } else {
      clearErrors("address");
    }
    setIsTyping(false);
  }, [addressValue, trigger, clearErrors]);

  const isAddressDirty = getFieldState("address", formState).isDirty;
  const isAddressInvalid = getFieldState("address", formState).invalid;

  const reset = () => {
    form.reset();
    setAddressValue(null);
  };

  return {
    addressValue,
    isTyping,
    form,
    isAddressDirty,
    isAddressInvalid,
    handleChange,
    reset,
  };
}
