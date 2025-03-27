const Home = () => {
    return (
      <div className="px-4 py-3 md:px-6 lg:px-6 xl:px-10">
        <h1 className="text-2xl font-bold">Home</h1>
        <p>Manage your Home here.</p>
        <p>`{import.meta.env.VITE_API_BASE_URL}`</p>
      </div>
    );
  };
  
  export default Home;