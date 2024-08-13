import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

const SearchDonor = () => {
  return (
    <div className="max-w-5xl mx-auto shadow-md bg-primary text-white rounded-xl">
      <div className="p-8">
        <h1 className="text-3xl font-semibold text-center">Search a Donor</h1>

        <form className="grid grid-cols-4 my-7 text-gray-100 gap-5">
          <select className="select select-bordered w-full max-w-xs bg-accent">
            <option value="value" disabled selected>
              Normal
            </option>
            <option value="value">Normal Apple</option>
            <option value="value">Normal Orange</option>
            <option value="value">Normal Tomato</option>
          </select>
          <select className="select select-bordered w-full max-w-xs bg-accent">
            <option value="value" disabled selected>
              Normal
            </option>
            <option value="value">Normal Apple</option>
            <option value="value">Normal Orange</option>
            <option value="value">Normal Tomato</option>
          </select>
          <select className="select select-bordered w-full max-w-xs bg-accent">
            <option value="value" disabled selected>
              Normal
            </option>
            <option value="value">Normal Apple</option>
            <option value="value">Normal Orange</option>
            <option value="value">Normal Tomato</option>
          </select>
          <select className="select select-bordered w-full max-w-xs bg-accent">
            <option value="value" disabled selected>
              Normal
            </option>
            <option value="value">Normal Apple</option>
            <option value="value">Normal Orange</option>
            <option value="value">Normal Tomato</option>
          </select>
        </form>
<div className="text-center">
        <Button className="px-16 text-xl bg-accent ">Donor</Button>
</div>
      </div>
    </div>
  );
};

export default SearchDonor;
