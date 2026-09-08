import { sidebarBrands } from "@/content/sidebar-brands";

export function SidebarLogos() {
  return [0, 1].map((copy) => (
    <div
      className="nav-comapny-item"
      key={copy}
      aria-hidden={copy === 1 ? true : undefined}
    >
      {sidebarBrands.map((brand) => (
        <img
          key={brand.name}
          src={brand.image}
          alt={copy === 0 ? brand.name : ""}
          title={brand.name}
          loading="eager"
          className={`sidebar-brand-logo w-auto max-w-none shrink-0 object-contain brightness-0 ${brand.tall ? "h-[clamp(1.75rem,2.65vw,3rem)]" : "h-[clamp(1.1rem,1.55vw,1.8rem)]"}`}
        />
      ))}
    </div>
  ));
}
