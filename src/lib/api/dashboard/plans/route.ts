// import { NextResponse } from 'next/server';
// import { createPlan, deletePlan, getPlans, updatePlan } from '@/lib/plans';
// import { Plan } from '@/lib/db/schema';
// import { ApiResponse } from '@/app/api/dashboard/plans/route';

// export async function GET() {
//   try {
//     const plans = await getPlans();
//     const response: ApiResponse<Plan[]> = {
//       data: plans.map(plan => ({
//         ...plan,
//         speed: plan.speed || '',
//         original_price: plan.original_price || 0,
//         popular: plan.popular || false,
//         color: plan.color || ''
//       })),
//       status: 200
//     };
//     return NextResponse.json(response);
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to fetch plans', status: 500 });
//   }
// }

// export async function POST(request: Request) {
//   try {
//     const planData = await request.json();
//     const result = await createPlan(planData);
//     return NextResponse.json({ data: result, status: 201 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to create plan', status: 500 });
//   }
// }

// export async function PUT(request: Request) {
//   try {
//     const { id, ...planData } = await request.json();
//     if (!id) {
//       return NextResponse.json({ error: 'Plan ID is required', status: 400 });
//     }
//     const result = await updatePlan(id, planData);
//     return NextResponse.json({ data: result, status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to update plan', status: 500 });
//   }
// }

// export async function DELETE(request: Request) {
//   try {
//     const { id } = await request.json();
//     if (!id) {
//       return NextResponse.json({ error: 'Plan ID is required', status: 400 });
//     }
//     await deletePlan(id);
//     return NextResponse.json({ data: { success: true }, status: 200 });
//   } catch (error) {
//     return NextResponse.json({ error: 'Failed to delete plan', status: 500 });
//   }
// }