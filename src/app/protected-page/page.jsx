import ProtectedWrapper from "@/components/ProtectedWrapper";

export default function DashboardPage() {
  return (
    <ProtectedWrapper>
      <h1>Dashboard</h1>
      <p>Only logged-in users can see this.</p>
    </ProtectedWrapper>
  );
}
