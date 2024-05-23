const AllRightsReserved = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="all-rights-reserved">
      <p className="text-md">© {currentYear} All Rights Reserved.</p>
    </div>
  );
};

export default AllRightsReserved;
