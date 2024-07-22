
const Header = () => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center w-full top-0 z-10">
      <div className="flex items-center">
        <div className="h-20 w-20 bg-cover bg-center mr-2" style={{ 
          backgroundImage: 'url("https://i.pinimg.com/236x/0a/e7/16/0ae7168109df3688316c8bfd361ccbfb.jpg")' 
        }}></div>
        <div className="text-3xl font-bold">Nazarene Vehicle Rental</div>
      </div>
    </header>
  );
}

export default Header;
