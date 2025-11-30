// app/faculty/[slug]/page.js
import ProgramCom from "@/components/FaculitiesComponent/ProgramCom";
import FacultyDoctors from "@/components/FaculitiesComponent/FacultyDoctors";
import FacultyGoals from "@/components/FaculitiesComponent/FacultyGoals";
import FacultyLevels from "@/components/FaculitiesComponent/FacultyLevels";
import FacultyOverview from "@/components/FaculitiesComponent/FacultyOverview";
import Header from "@/components/FaculitiesComponent/Header";
import Overview from "@/components/FaculitiesComponent/Overview";
import PeekSlider from "@/components/FaculitiesComponent/PeekSlider";
// import ProgramCards from "@/components/FaculitiesComponent/ProgramCards";
import fs from "fs";
import path from "path";
import PdfFlipbook from "@/components/FaculitiesComponent/PdfFlipbook";
import StudentGuide from "@/components/homecomponent/StudentGuide";

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
            <StudentGuide />
            {/* <PdfFlipbook pdfUrl="/data/1.pdf" /> */}

            {/* باقي مكونات الصفحة يمكن إضافتها هنا */}
            {
                data.type == "hasPrograms" ?
                    (
                        <Overview
                            title={data.overview.title}
                            para1={data.overview.para1}
                            para2={data.overview.para2}
                            overviewImage={data.overviewImage}

                        />
                    ) :
                    (
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
                            overviewImages={data.overviewImages}
                        />
                    )
            }

            {data.type == "hasPrograms" &&
                <>
                    <ProgramCom data={data.programData} />
                    <PeekSlider images={data.facultyGallery} />
                    <FacultyDoctors team={data.facultyDoctors} />
                </>
            }

            {data.type !== "hasPrograms" &&

                <>
                    <PeekSlider images={data.facultyGallery} />
                    <FacultyDoctors team={data.facultyDoctors} />
                    <FacultyGoals
                        data={data.facultyGoals}
                        img={data.goalsImage}
                    />


                    <FacultyLevels facultyData={data} />

                </>

            }

        </div >
    );
}
