// Facts shown in the Contact section. Rows with an empty value are not rendered.
export const site = {
  name: "Jonas David",
  email: "jonaselcid30@gmail.com",
  linkedin: "https://www.linkedin.com/in/jonas-david-487722352/",
  whatsapp: "+63 908 678 2848",
  whatsappHref: "https://wa.me/639086782848",
  location: "Philippines, remote",
  timezone: "PHT (UTC+8)",
};

export const contactRows: { label: string; value: string; href?: string }[] = [
  { label: "WhatsApp", value: site.whatsapp, href: site.whatsappHref },
  { label: "Location", value: site.location },
  { label: "Timezone", value: site.timezone },
].filter((r) => r.value);
