import { Input, Label, Button } from "../form/form-components";

export default function LoginForm() {
  return (
    <form action="" className="w-96 text-white border-gray-500 ">
      <div className="flex flex-col">
        <Label htmlFor={"username"}>Username</Label>
        <Input type={"text"} name={"username"} />
      </div>
      <div className="flex flex-col">
        <Label htmlFor={"password"}>Password</Label>
        <Input type={"password"} name={"password"} />
      </div>
      <p className="text-blue-500 my-2 hover:underline text-sm">
        Trouble logging in?
      </p>
      <Button>Login</Button>
    </form>
  );
}
