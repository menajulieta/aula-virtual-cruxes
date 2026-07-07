import { RouterProvider } from 'react-router';
import { appRouter } from './app.router';

function CruxesApp() {

  return (
    <>
      <RouterProvider router={appRouter}/>
    </>
  )
}

export default CruxesApp
