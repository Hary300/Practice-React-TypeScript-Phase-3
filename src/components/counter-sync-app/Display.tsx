type DisplayProp = {
  count: number;
};

export default function Display({ count }: DisplayProp) {
  return <p>{count}</p>;
}
