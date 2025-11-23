export const MenuBar = () => {
  return (
    <ul role="menu-bar" className="fixed top-0 left-0 w-full border-b-2 border-black z-50 select-none font-chicago list-none m-0 p-0">
      <li role="menu-item" className="cursor-default">
        <span className="font-bold"></span>
      </li>
      <li role="menu-item" className="cursor-default">
        <span className="font-bold">File</span>
      </li>
      <li role="menu-item" className="cursor-default">
        <span className="font-bold">Edit</span>
      </li>
      <li role="menu-item" className="cursor-default">
        <span className="font-bold">View</span>
      </li>
      <li role="menu-item" className="cursor-default">
        <span className="font-bold">Special</span>
      </li>
    </ul>
  );
};
