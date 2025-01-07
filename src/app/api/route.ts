// //page.tsx 경로 api 처리

import { NextResponse } from "next/server";

// export async function Get(){
//   return NextResponse.json('/api/min/items');
// }

export async function Post() {
  return NextResponse.json("/api/min/items");
}
