export default function ({ $cookies, redirect, from }) {
   if ($cookies.get("access_token")) redirect(from?.fullPath || "/");
}
