export default function ({ redirect, route, $cookies }) {
  if (!$cookies.get("access_token"))
    redirect("/login?redirect=" + route.fullPath);
}
