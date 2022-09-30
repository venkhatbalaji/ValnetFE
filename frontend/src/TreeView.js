
const TreeView = ({ treeData = [] }) => {
  const toggleBranch = (e) => {

  };

  return (
    <ul className="tree vertical">
      {treeData.map((leaf) =>
        leaf.name ? (
          <li>
            <span
              key={Math.random() + leaf.id}
              data-id={leaf.id}
              onClick={toggleBranch}
            >
              {leaf.name}
            </span>
            {leaf.children && (
              <TreeView key={leaf.id} treeData={leaf.children} />
            )}
            {leaf.tasks && <TreeView key={leaf.id} treeData={leaf.tasks} />}
          </li>
        ) : null
      )}
    </ul>
  );
};

export default TreeView;
