// app/faculty/[slug]/page.js
import FacultyDoctors from "@/components/FaculitiesComponent/FacultyDoctors";
import FacultyGoals from "@/components/FaculitiesComponent/FacultyGoals";
import FacultyLevels from "@/components/FaculitiesComponent/FacultyLevels";
import FacultyOverview from "@/components/FaculitiesComponent/FacultyOverview";
import Header from "@/components/FaculitiesComponent/Header";
import PeekSlider from "@/components/FaculitiesComponent/PeekSlider";
import fs from "fs";
import path from "path";

// **Server Component**: لا تضع "use client" هنا
export default async function Page({ params }) {
    const { slug } = await params;

    // مسار الملف
    const filePath = path.join(process.cwd(), "src", "Data", "faculties", `${slug}.json`);

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

            <FacultyOverview
                title={data.overview.title}
                para1={data.overview.para1}
                para2={data.overview.para2}
                programTitle={data.overview.programTitle}
                programPara={data.overview.programPara}
                visionPara={data.overview.visionPara}
                missionPara={data.overview.missionPara}
                images={data.facultyGallery}
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
