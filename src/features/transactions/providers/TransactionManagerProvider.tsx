import { TxCardProps } from "@/features/transactions/components/TxCard";
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import { TransactionMessage } from "../transactions.types";

interface TransactionContextType {
  transaction: TransactionMessage | null;
  addTransaction: (tx: TransactionMessage | null) => void;
  updateTransaction: (tx: Partial<TxCardProps>) => void;
  clearTransaction: () => void;
}

const TransactionContext = createContext<TransactionContextType | undefined>(
  undefined,
);

export const TransactionManagerProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [transaction, setTransaction] = useState<TransactionMessage | null>(
    null,
  );

  const addTransaction = useCallback((tx: TransactionMessage | null) => {
    setTransaction(tx);
  }, []);

  const updateTransaction = useCallback((tx: Partial<TxCardProps>) => {
    setTransaction((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        ...tx,
      };
    });
  }, []);

  const clearTransaction = useCallback(() => {
    setTransaction(null);
  }, []);

  return (
    <TransactionContext.Provider
      value={{
        transaction,
        addTransaction,
        updateTransaction,
        clearTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

export const useTransactionManager = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};
