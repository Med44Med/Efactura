export type invoiceFrom = {
  name: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  phone?: string;
};
export type invoiceTo = {
  name: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
  phone?: string;
};
export type Product = {
  name: string;
  unitPrice: number;
  tax?: number;
};

export type invoiceProduct = Product & { quantity: number };

export type invoiceFooter = {
  note?: string;
};

export type invoiceType = {
  id: string;
  from: invoiceFrom;
  to: invoiceFrom;
  products: invoiceProduct[];
  footer?: invoiceFooter;
};
