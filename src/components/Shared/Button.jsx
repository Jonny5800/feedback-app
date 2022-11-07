function Button(children, version, type, isDisabled) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {/*className={`btn btn-${version}` - THIS adds the button version class conditionally - vid20 2:20 */}
      {children}
    </button>
  );
}

export default Button;
