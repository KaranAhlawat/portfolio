import { ComponentChildren } from "preact";

export default function SocialLink(
  props: { link: string; children: ComponentChildren },
) {
  return (
    <a
      href={props.link}
      target="_blank"
      rel="noopener noreferrer"
      class="p-1 rounded-full border-2 border-gray-900"
    >
      {props.children}
    </a>
  );
}
