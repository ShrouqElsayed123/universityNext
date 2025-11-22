
import FacultyDoctors from "@/components/FaculitiesComponent/FacultyDoctors";
import FacultyGoals from "@/components/FaculitiesComponent/FacultyGoals";
import FacultyLevels from "@/components/FaculitiesComponent/FacultyLevels";
import Header from "@/components/FaculitiesComponent/Header";
import PeekSlider from "@/components/FaculitiesComponent/PeekSlider";
import ProgramCards from "@/components/FaculitiesComponent/ProgramCards";
import ProgramOverview from "@/components/FaculitiesComponent/ProgramOverview";
import fs from "fs";
import path from "path";
export default async function ProgramPage({ params }) {
    const { slug, pSlug } = params;


    // مسار الملف
    const filePath = path.join(process.cwd(), "src", "Data", "faculties", `${pSlug}.json`);

    // قراءة الملف
    const jsonData = fs.readFileSync(filePath, "utf8");
    const data = JSON.parse(jsonData);



    return (
        <div className="space-y-16 ">
            <Header
                links={data.header.links.map(link => ({
                    to: link.to,
                    label: link.label // اختيار اللغة
                }))}
                img={data.header.img}
            />

            {/* باقي مكونات الصفحة يمكن إضافتها هنا */}

            <ProgramOverview
                title={data.overview.title}
                para1={data.overview.para1}
                para2={data.overview.para2}

                visionPara={data.overview.visionPara}
                missionPara={data.overview.missionPara}

                overviewImage={data.overviewImage}
            />




            <FacultyGoals
                data={data.facultyGoals}
                img={data.goalsImage}
            />

            <PeekSlider />
            <FacultyLevels facultyData={data} />
            <FacultyDoctors team={data.facultyDoctors} />




        </div>
    );
}
