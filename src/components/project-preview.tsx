import type { CSSProperties, ReactNode } from "react";
import {
  ArrowRightIcon,
  BellIcon,
  BooksIcon,
  CalendarBlankIcon,
  ChatsCircleIcon,
  CheckCircleIcon,
  ChecksIcon,
  CubeIcon,
  FileTextIcon,
  FingerprintIcon,
  LeafIcon,
  LockKeyIcon,
  MagnifyingGlassIcon,
  PackageIcon,
  PulseIcon,
  QrCodeIcon,
  ReceiptIcon,
  ShieldCheckIcon,
  SquaresFourIcon,
  TerminalWindowIcon,
  TicketIcon,
  ToothIcon,
  TruckIcon,
  WalletIcon,
} from "@phosphor-icons/react/ssr";
import type { ProjectPreviewKind } from "@/content/projects";

function Window({
  brand,
  icon,
  children,
  className = "",
}: {
  brand: string;
  icon: ReactNode;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`pv-window ${className}`}>
      <div className="pv-toolbar">
        <span className="pv-brand">
          {icon}
          {brand}
        </span>
        <span className="pv-window-dots">
          <i />
          <i />
          <i />
        </span>
      </div>
      {children}
    </div>
  );
}

function Sidebar({ children }: { children: ReactNode }) {
  return <div className="pv-sidebar">{children}</div>;
}

function DappsPreview() {
  return (
    <>
      <div className="pv-grid-backdrop" />
      <Window brand="gen6 / dApps" icon={<CubeIcon weight="fill" />}>
        <div className="pv-app-body">
          <Sidebar>
            <SquaresFourIcon weight="fill" />
            <FileTextIcon />
            <WalletIcon />
            <ChatsCircleIcon />
            <PulseIcon />
          </Sidebar>
          <div className="pv-main">
            <div className="pv-heading-row">
              <div>
                <span className="pv-eyebrow">YOUR WORKSPACE</span>
                <h4>Content & activity</h4>
              </div>
              <span className="pv-pill">
                <i className="pv-live-dot" /> Connected
              </span>
            </div>
            <div className="pv-balance">
              <div>
                <span>Available balance</span>
                <strong>
                  1,280.00 <small>GEN6</small>
                </strong>
              </div>
              <div className="pv-wave-bars">
                {[25, 42, 35, 57, 48, 73, 66, 91, 78, 100].map(
                  (height, index) => (
                    <i
                      key={index}
                      style={{
                        height: `${height}%`,
                        animationDelay: `${index * -0.18}s`,
                      }}
                    />
                  ),
                )}
              </div>
            </div>
            <div className="pv-table-title">
              <span>Recent content</span>
              <span>Verification</span>
            </div>
            {["Project archive.zip", "Agreement.pdf", "Research notes.pdf"].map(
              (file) => (
                <div className="pv-file-row" key={file}>
                  <FileTextIcon />
                  <span>{file}</span>
                  <CheckCircleIcon weight="fill" />
                </div>
              ),
            )}
          </div>
        </div>
      </Window>
      <div className="pv-floating-message pv-float">
        <span className="pv-message-icon">
          <LockKeyIcon weight="fill" />
        </span>
        <div>
          <strong>Members chat</strong>
          <span>Encrypted conversation</span>
        </div>
        <ChecksIcon />
      </div>
    </>
  );
}

function VerifierPreview() {
  return (
    <Window
      brand="gen6 / verifier"
      icon={<ShieldCheckIcon weight="fill" />}
      className="pv-verifier-window"
    >
      <div className="pv-verifier-content">
        <span className="pv-local-label">
          <TerminalWindowIcon /> Running locally
        </span>
        <div className="pv-verify-file">
          <FileTextIcon weight="duotone" />
          <span className="pv-scan-line" />
        </div>
        <h4>Verify what matters.</h4>
        <p>
          agreement.pdf <span>·</span> 2.4 MB
        </p>
        <div className="pv-verify-steps">
          <div>
            <FingerprintIcon />
            <span>File fingerprint</span>
            <CheckCircleIcon
              className="pv-step-check pv-step-1"
              weight="fill"
            />
          </div>
          <div>
            <CubeIcon />
            <span>On-chain record</span>
            <CheckCircleIcon
              className="pv-step-check pv-step-2"
              weight="fill"
            />
          </div>
          <div>
            <ShieldCheckIcon />
            <span>Identity verified</span>
            <CheckCircleIcon
              className="pv-step-check pv-step-3"
              weight="fill"
            />
          </div>
        </div>
        <div className="pv-verified">
          <CheckCircleIcon weight="fill" /> File matches the blockchain record
        </div>
      </div>
    </Window>
  );
}

function FonoPreview() {
  return (
    <>
      <div className="pv-fono-orbit pv-orbit-1" />
      <div className="pv-fono-orbit pv-orbit-2" />
      <div className="pv-fono-wordmark">
        FONO<span>LIVE, TOGETHER.</span>
      </div>
      <div className="pv-event-poster">
        <span className="pv-eyebrow">LIVE MUSIC / BOGOTÁ</span>
        <strong>
          NIGHT
          <br />
          SESSIONS
        </strong>
        <div className="pv-poster-art">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <span className="pv-event-caption">Find your place in the crowd.</span>
      </div>
      <div className="pv-ticket pv-float">
        <div className="pv-ticket-top">
          <TicketIcon weight="fill" />
          <span>FONO PASS</span>
        </div>
        <h4>Night Sessions</h4>
        <p>GENERAL ADMISSION</p>
        <QrCodeIcon className="pv-ticket-qr" weight="fill" />
        <div className="pv-ticket-divider" />
        <div className="pv-ticket-bottom">
          <ShieldCheckIcon weight="fill" />
          <span>On-chain ticket</span>
        </div>
      </div>
    </>
  );
}

function SicarPreview() {
  return (
    <Window brand="SICAR" icon={<BooksIcon weight="fill" />}>
      <div className="pv-app-body">
        <Sidebar>
          <MagnifyingGlassIcon weight="bold" />
          <BooksIcon />
          <FileTextIcon />
        </Sidebar>
        <div className="pv-main pv-research">
          <span className="pv-eyebrow">CONSULTA DOCUMENTAL</span>
          <h4>
            Una pregunta.
            <br />
            Fuentes a la vista.
          </h4>
          <div className="pv-search-field">
            <MagnifyingGlassIcon />
            <span>Buscar en normativa tributaria</span>
            <ArrowRightIcon />
          </div>
          <div className="pv-retrieval-flow">
            <span>Consulta</span>
            <i />
            <span>Fuentes</span>
            <i />
            <span>Respuesta</span>
          </div>
          <div className="pv-source-title">
            <span>Fuentes recuperadas</span>
            <span>02</span>
          </div>
          <div className="pv-source-row pv-source-1">
            <FileTextIcon />
            <div>
              <strong>Estatuto Tributario</strong>
              <span>Fragmentos relacionados con la consulta</span>
            </div>
            <span>01</span>
          </div>
          <div className="pv-source-row pv-source-2">
            <FileTextIcon />
            <div>
              <strong>Normativa DIAN</strong>
              <span>Documentos de referencia</span>
            </div>
            <span>02</span>
          </div>
          <div className="pv-answer-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </Window>
  );
}

function SonrisasPreview() {
  const orders = [
    ["#1048", "Clínica Norte", "En producción"],
    ["#1047", "Dental Centro", "Enviado"],
    ["#1046", "Clínica Alameda", "Facturado"],
  ];
  return (
    <Window brand="Lab Sonrisas" icon={<ToothIcon weight="fill" />}>
      <div className="pv-app-body">
        <Sidebar>
          <SquaresFourIcon weight="fill" />
          <PackageIcon />
          <TruckIcon />
          <ReceiptIcon />
        </Sidebar>
        <div className="pv-main pv-orders">
          <div className="pv-heading-row">
            <div>
              <span className="pv-eyebrow">OPERACIONES</span>
              <h4>Cada pedido, en su lugar.</h4>
            </div>
            <BellIcon />
          </div>
          <div className="pv-order-stats">
            <div>
              <span>Pedidos activos</span>
              <strong>24</strong>
            </div>
            <div>
              <span>Envíos de hoy</span>
              <strong>08</strong>
            </div>
            <div>
              <span>Por facturar</span>
              <strong>06</strong>
            </div>
          </div>
          <div className="pv-order-table">
            <div className="pv-order-row pv-order-labels">
              <span>Pedido</span>
              <span>Cliente</span>
              <span>Estado</span>
            </div>
            {orders.map(([number, name, state], index) => (
              <div className={`pv-order-row pv-order-${index}`} key={number}>
                <span>{number}</span>
                <span>{name}</span>
                <span className={`pv-order-status pv-status-${index}`}>
                  {state}
                </span>
              </div>
            ))}
          </div>
          <div className="pv-order-flow">
            <span>
              <PackageIcon /> Pedido
            </span>
            <ArrowRightIcon />
            <span>
              <TruckIcon /> Envío
            </span>
            <ArrowRightIcon />
            <span>
              <ReceiptIcon /> Factura
            </span>
          </div>
        </div>
      </div>
    </Window>
  );
}

function GreenloopPreview() {
  const phases = [
    { label: "Planning", start: 0, width: 32 },
    { label: "Execution", start: 20, width: 54 },
    { label: "Review", start: 60, width: 27 },
    { label: "Delivery", start: 80, width: 20 },
  ];
  return (
    <>
      <Window brand="GreenLoop" icon={<LeafIcon weight="fill" />}>
        <div className="pv-app-body">
          <Sidebar>
            <SquaresFourIcon weight="fill" />
            <CalendarBlankIcon />
            <BellIcon />
          </Sidebar>
          <div className="pv-main pv-planning">
            <div className="pv-heading-row">
              <div>
                <span className="pv-eyebrow">PROJECT 024</span>
                <h4>The plan, at a glance.</h4>
              </div>
              <span className="pv-pill">On track</span>
            </div>
            <div className="pv-planning-tabs">
              <span>Overview</span>
              <strong>Timeline</strong>
              <span>Activity</span>
            </div>
            <div className="pv-gantt">
              <div className="pv-gantt-weeks">
                <span />
                <span>W01</span>
                <span>W02</span>
                <span>W03</span>
                <span>W04</span>
              </div>
              {phases.map((phase, index) => (
                <div className="pv-gantt-row" key={phase.label}>
                  <span>{phase.label}</span>
                  <div className="pv-gantt-track">
                    <i
                      className={`pv-gantt-bar pv-gantt-${index}`}
                      style={
                        {
                          "--bar-start": `${phase.start}%`,
                          "--bar-width": `${phase.width}%`,
                          "--bar-delay": `${index * 0.3}s`,
                        } as CSSProperties
                      }
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="pv-plan-footer">
              <span>
                <i className="pv-live-dot" /> Team workspace
              </span>
              <span>4 project phases</span>
            </div>
          </div>
        </div>
      </Window>
      <div className="pv-floating-message pv-float">
        <span className="pv-message-icon">
          <BellIcon weight="fill" />
        </span>
        <div>
          <strong>Timeline updated</strong>
          <span>Everyone is on the same page.</span>
        </div>
        <CheckCircleIcon />
      </div>
    </>
  );
}

function MorePreview() {
  return (
    <>
      <div className="pv-collage-loop" />
      <div className="pv-collage-sheet pv-collage-ui">
        <span className="pv-collage-label">
          <SquaresFourIcon /> UI ideas
        </span>
        <div className="pv-collage-layout">
          <i />
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="pv-collage-sheet pv-collage-data">
        <span className="pv-collage-label">
          <PulseIcon /> Small tools
        </span>
        <div className="pv-collage-bars">
          {[45, 75, 55, 95].map((height, index) => (
            <i
              key={index}
              style={{
                height: `${height}%`,
                animationDelay: `${index * -0.7}s`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="pv-collage-sheet pv-collage-code">
        <span className="pv-collage-label">
          <TerminalWindowIcon /> side-project.ts
        </span>
        <div className="pv-collage-snippet">
          <span>{"{ }"}</span>
          <div>
            <i />
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
      <div className="pv-collage-sheet pv-collage-phone">
        <span className="pv-collage-notch" />
        <div className="pv-collage-app-shape" />
        <i />
        <i />
        <span className="pv-collage-app-button" />
      </div>
      <div className="pv-collage-sheet pv-collage-note">
        <strong>and more.</strong>
        <span>ALWAYS EXPLORING</span>
      </div>
      <span className="pv-collage-plus">+</span>
    </>
  );
}

const previews = {
  dapps: DappsPreview,
  verifier: VerifierPreview,
  fono: FonoPreview,
  sicar: SicarPreview,
  sonrisas: SonrisasPreview,
  greenloop: GreenloopPreview,
  more: MorePreview,
};

export function ProjectPreview({
  kind,
  label,
}: {
  kind: ProjectPreviewKind;
  label: string;
}) {
  const Preview = previews[kind];
  return (
    <div
      className={`project-preview preview-${kind}`}
      role="img"
      aria-label={label}
    >
      <div className="preview-stage" aria-hidden="true">
        <Preview />
      </div>
    </div>
  );
}
