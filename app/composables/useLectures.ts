import type { Lecture } from "@/models/lecture";

export const useLectures = () => {
  const lectureAssets = import.meta.glob("~/assets/lecture/**", { eager: true, as: "url" });
  
  function findAsset(filename: string): string | null {
    for (const key in lectureAssets) {
      const url = (lectureAssets as Record<string, string>)[key];
      if (key.endsWith(filename) || url.endsWith(filename)) {
        return url;
      }
    }
    return null;
  }

  const placeholderImg = "/placeholder.png";
  
  const lectures = ref<Lecture[]>([
    {
      id: "0",
      title: "Case Studies",
      description: "Case studies for Computer Vision 2024/2025",
      supervisors: ["Prof. Giovanna Castellano"],
      status: "Completed",
      date: "2023-04-23",
      tags: ["Computer Vision", "Video Understanding", "Sign Language"],
      image: findAsset("cv_case_studies.jpeg") ?? placeholderImg,
      pdf: findAsset("cv_case_studies_2024_2025.pdf"),
    },
    {
      id: "1",
      title: "Video Understanding",
      description: "Introduction and overview of video understanding, including key concepts and applications.",
      supervisors: ["Prof. Giovanna Castellano"],
      status: "Completed",
      date: "2023-05-23",
      tags: ["Computer Vision", "Video Understanding"],
      image: findAsset("video_understanding.jpeg") ?? placeholderImg,
      pdf: findAsset("video_understanding.pdf"),
    },
  ]);

  return {
    lectures
  };
};
