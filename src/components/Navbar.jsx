import classes from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <div>Dhorq Digest</div>
      <div>YOUR DIGEST</div>
      <button className={classes.note}>Add Note</button>
    </nav>
  );
};

export default Navbar;
