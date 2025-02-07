import { NextResponse } from 'next/server';
import { createPlan, deletePlan, getPlans, updatePlan } from '@/lib/api/plans';
import { Plan } from '@/lib/db/schema';

export async function GET() {
  const result = await getPlans();
  return NextResponse.json(result, { status: result.status });
}

export async function POST(request: Request) {
  const planData = await request.json();
  const result = await createPlan(planData);
  return NextResponse.json(result, { status: result.status });
}

export async function PUT(request: Request) {
  const { id, ...planData } = await request.json();
  if (!id) {
    return NextResponse.json(
      { error: 'Plan ID is required' },
      { status: 400 }
    );
  }
  const result = await updatePlan(id, planData);
  return NextResponse.json(result, { status: result.status });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  if (!id) {
    return NextResponse.json(
      { error: 'Plan ID is required' },
      { status: 400 }
    );
  }
  const result = await deletePlan(id);
  return NextResponse.json(result, { status: result.status });
}