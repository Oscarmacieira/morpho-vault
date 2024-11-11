"use client";

import { Card, CardContent } from "@/components/ui/atoms/Card";
import { TextField } from "@/components/ui/atoms/TextField";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/molecules/Form";
import { displayEvmAddress } from "@/lib/format/displayEvmAddress";
import { useVault } from "../providers/VaultProvider";

const addressPlaceholder = displayEvmAddress("0xabcdef12345", {
  startLength: 5,
  endLength: 5,
});

export const SearchVaultFormCard = () => {
  const {
    vaultAddressForm: { form, handleChange },
  } = useVault();

  return (
    <Card size={"large"}>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(() => {})}>
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>MetaMorpho Address</FormLabel>
                  <FormControl>
                    <TextField
                      {...field}
                      disabled={form.formState.isValidating}
                      value={field.value ?? ""}
                      loading={form.formState.isValidating}
                      success={form.formState.isValid}
                      placeholder={addressPlaceholder}
                      error={!!form.formState.errors.address}
                      onChange={(e) => handleChange(e, field.name)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
