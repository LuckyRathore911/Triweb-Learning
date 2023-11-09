import NavigationBar from "./NavigationBar";

function MainLayout(props) {
  return (
    <div>
      <main>
        <NavigationBar />
      </main>
      {props.children}
    </div>
  );
}
export default MainLayout;
