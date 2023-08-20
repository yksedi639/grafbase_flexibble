import Categories from "@/components/Categories";
import LoadMore from "@/components/LoadMore";

const Home = () => {
  return (
    <div className="flex-start flex-col paddings mb-16">
      <Categories />
      {/* <Posts /> */}
      <LoadMore />
    </div>
  );
};

export default Home;
