export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h2 className="m-4 p-2">Profile</h2>
      <hr />
      <p className="text-4xl">
        Profile page
        <span className="p-2 ml-2 rounded bg-gray-300 text-black">
          {params.id}
        </span>
      </p>
    </div>
  );
}
