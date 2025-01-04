import { UserButton } from "@clerk/nextjs";

export default function DashboardPage() {
  return (
    <div className="">
      <p>Dashboard</p>
      <UserButton afterSignOutUrl="/" />
    </div>
  )

}