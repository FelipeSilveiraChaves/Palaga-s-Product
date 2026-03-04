import LessonsTitle from "../components/lessonstitle";
import TextWrapper from "../components/textwrapper";
import BaseContent from "../components/paragraph";

type LessonBlockProps = {
  lessonName: string;
  whichLesson: string;
  description: React.ReactNode; // permite string OU JSX
  className?: string; // se quiser ajustar algo por bloco
};

export default function LessonBlock({
  lessonName,
  whichLesson,
  description,
  className,
}: LessonBlockProps) {
  return (
    <TextWrapper className={className}>
      <div className="mt-6.25 px-2">
        {/* px-2 aumenta em 8 os 45px de paddings já somados anteriormente ficando 53px */}
        <LessonsTitle LessonName={lessonName} WhichLesson={whichLesson} />
        <BaseContent className="pt-5 pb-18">{description}</BaseContent>
      </div>
    </TextWrapper>
  );
}
