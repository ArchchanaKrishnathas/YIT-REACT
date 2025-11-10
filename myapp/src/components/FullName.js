function FullName(prop) {
  return (
    <> {/* Fragments must */}
        <b> First name:</b> <i> {prop.fname}</i> 
        <b> Last name:</b> <i> {prop.lname}</i>
    </>
  );
}

export default FullName;