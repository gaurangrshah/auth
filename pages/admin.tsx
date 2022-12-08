export default function AdminDashboard() {

  return (
    <div className='page'>
      Some super secret dashboard
    </div>
  );
}

AdminDashboard.auth = true; // this will trigger auth flow when this route is hit
