import CategoryTile from "./CategoryTile";
import studImg from "../../assets/studentIcon.svg";
import subImg from "../../assets/subject.svg";
import deptImg from "../../assets/department.svg";

const CATEGORIES_LIST = [
  {
    id: "cat_1",
    img: studImg,
    name: "Students",
    path: "/students",
    description:
      "View the students and their cumulative marks according to their roll numbers.",
  },
  {
    id: "cat_2",
    img: deptImg,
    name: "Departments",
    path: "/departments",
    description: "View students of a department in the order of ranks.",
  },
  {
    id: "cat_3",
    img: subImg,
    name: "Subjects",
    path: "/subjects",
    description:
      "View the Subjects and the average and mean performance in them according to their codes.",
  },
];

function Categories() {
  return (
    <div className="container">
      {CATEGORIES_LIST.map((cat) => (
        <CategoryTile
          key={cat.id}
          path={cat.path}
          name={cat.name}
          img={cat.img}
          desc={cat.description}
        />
      ))}
    </div>
  );
}

export default Categories;
