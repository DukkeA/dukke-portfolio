import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr/WhatsappLogo";

export function ContactButtonLabel({ children }: { children: string }) {
  return (
    <div className="contact-button-content">
      <WhatsappLogoIcon
        weight="regular"
        aria-hidden="true"
        className="contact-button-icon"
      />
      <p className="button-text">{children}</p>
    </div>
  );
}
