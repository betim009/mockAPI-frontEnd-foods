import useInput from "../../hooks/useForm";

export default function MyInput() {
  const { value, onChange } = useInput();
  return <input type="text" value={value} onChange={onChange} />;
}
