import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  FileTextIcon,
} from "@phosphor-icons/react/ssr";
import { profile } from "@/content/profile";

export function ProfileLinks({ className = "" }: { className?: string }) {
  return (
    <div
      className={`profile-links ${className}`}
      role="group"
      aria-label="Professional profiles and CV"
    >
      <a
        href={profile.socials.github}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-access-link"
      >
        <GithubLogoIcon size={20} weight="fill" aria-hidden="true" /> GitHub
      </a>
      <a
        href={profile.socials.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="profile-access-link"
      >
        <LinkedinLogoIcon size={20} weight="fill" aria-hidden="true" /> LinkedIn
      </a>
      <a
        href={profile.cv.path}
        target="_blank"
        rel="noopener noreferrer"
        type="application/pdf"
        className="profile-access-link"
        aria-label="CV (PDF, opens in a new tab)"
      >
        <FileTextIcon size={20} aria-hidden="true" /> CV
      </a>
    </div>
  );
}
