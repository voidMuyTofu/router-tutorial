import { useParams } from "react-router-dom";
import { getInvoice } from "../data";
export default function Invoice() {
  const params = useParams();
  const invoice = getInvoice(parseInt(params.invoiceId!));
  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total a deber: {invoice != null ? invoice.amount : ""}</h2>
    </main>
  );
}
