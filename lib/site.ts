// Facts shown in the Contact section. Rows with an empty value are not rendered,
// so nothing is published until it is true. Fill these in before applying:
// the job post asks applicants for availability, rates and a payment method.
export const site = {
  name: "Jonas David",
  email: "jonaselcid30@gmail.com",
  linkedin: "https://www.linkedin.com/in/jonas-david-487722352/",
  location: "Philippines, remote",
  timezone: "PHT (UTC+8)",
  delivery: "Portrait 3:4 or 4:5, in batches of 10-30 images",
  // Leave "" to hide a row:
  availability: "Flexible schedule, usually from 1:00 PM PHT until late, which covers the Paris working day. Can start immediately.",
  rate: "€20 per hour",
  payment: "Wise (EUR), or Payoneer if preferred",
};

export const contactRows = [
  { label: "Location", value: site.location },
  { label: "Timezone", value: site.timezone },
  { label: "Delivery", value: site.delivery },
  { label: "Availability", value: site.availability },
  { label: "Rates", value: site.rate },
  { label: "Payment", value: site.payment },
].filter((r) => r.value);
