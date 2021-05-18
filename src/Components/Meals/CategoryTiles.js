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
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: "cat_2",
    img: deptImg,
    name: "Departments",
    path: "/departments",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
  {
    id: "cat_3",
    img: subImg,
    name: "Subjects",
    path: "/subjects",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
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
