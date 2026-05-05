import { timeline } from "../data/timeline";
import TimelineItem from "./TimelineItem";
import SectionTitle from "./SectionTitle";
import FadeIn from "./FadeIn";

export default function Timeline() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="mx-auto max-w-3xl">
        <SectionTitle label="experience.log" title="Experience" />

        <FadeIn>
          <div className="ml-2">
            {timeline.map((item) => (
              <TimelineItem key={`${item.period}-${item.title.zh}`} item={item} />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
