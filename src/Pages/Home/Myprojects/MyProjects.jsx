
import React from "react";
import "./myProjects.css";

const projectsData = [
  { title: "صاله مطار عرعر", img: "/Images/project_1.png" },
  { title: "المنطقه الصناعيه الثانيه بالرياض", img: "/Images/project_2.png" },
  { title: "مسارات رياضيه طبييه", img: "/Images/project_3.png" },
  { title: "مشاريع عديده لوزاره الداخليه", img: "/Images/project_4.png" },
];

const MyProjects = () => {
  return (
    <section className="my_projects" id="projects">
      <div className="my_projects_container">
        <h2>مشاريعنا</h2>
        <p className="my_projects_title">
          نفخر بما أنجزناه من مشاريع تُجسّد معاييرنا العالية وتنوّع خبراتنا.
          يعرض هذا القسم مجموعة مختارة من أبرز مشاريعنا السابقة التي تشهد على
          قدراتنا في تنفيذ مشاريع متنوعة ومتقدمة.
        </p>

        <div className="my_projects_container_cate">
          <a className="active">مشاريعنا</a>
          <a>سكني</a>
          <a>تجاري</a>
          <a>إداري</a>
          <a>صناعي</a>
        </div>

        <div className="my_projects_container_item">
          {projectsData.map((project, index) => (
            <div key={index} className="project_card">
              <img src={project.img} alt={project.title} />
              <div className="project_info">
                <h3 className="project_info_desc">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <p className="my_projects_title">
          كل مشروع هو قصة نجاح نراها من خلال رضا عملائنا. نحن نعتبر مشاريعنا
          السابقة أفضل دليل على جدارتنا وسببًا رئيسيًا لكسب ثقة عملائنا في
          مشاريعهم المستقبلية.
        </p>
      </div>
    </section>
  );
};

export default MyProjects;
