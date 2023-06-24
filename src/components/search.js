export default function search() {
  return (
    <div className=" w-50 input-group me-3">
      <input type="text" className="form-control border-end-0" placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
      <span className="input-group-text bg-transparent" id="basic-addon2">@</span>
    </div>
  )
};
