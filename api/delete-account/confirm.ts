import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * POST /api/delete-account/confirm
 *
 * 接收 { token } ，校验 JWT 后删除用户账号。
 * 当前未配置后端服务，返回 400。
 *
 * 环境变量：
 *   SUPABASE_URL             — Supabase 项目 URL
 *   SUPABASE_SERVICE_ROLE_KEY — Supabase Service Role Key（仅服务端使用）
 *   DELETE_ACCOUNT_TOKEN_SECRET — JWT 签名密钥
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // ── 仅允许 POST ──────────────────────────────────────────────
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { token } = req.body ?? {};

    if (!token || typeof token !== 'string') {
      return res.status(400).json({ error: 'Token is required' });
    }

    // ── 1. 校验 JWT ────────────────────────────────────────────
    // import jwt from 'jsonwebtoken';
    //
    // let payload: { sub: string; email: string; action: string };
    // try {
    //   payload = jwt.verify(token, process.env.DELETE_ACCOUNT_TOKEN_SECRET!) as typeof payload;
    // } catch (jwtErr) {
    //   return res.status(400).json({ error: 'Invalid or expired token' });
    // }
    //
    // if (payload.action !== 'delete-account') {
    //   return res.status(400).json({ error: 'Invalid token action' });
    // }

    // ── 2. 防重放：检查用户是否已被删除 ────────────────────────────
    // import { createClient } from '@supabase/supabase-js';
    //
    // const supabase = createClient(
    //   process.env.SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_ROLE_KEY!,
    // );
    //
    // const { data: { user }, error: getError } = await supabase.auth.admin.getUserById(payload.sub);
    // if (getError || !user) {
    //   return res.status(400).json({ error: 'Account already deleted or not found' });
    // }

    // ── 3. 删除用户 ─────────────────────────────────────────────
    // const { error: deleteError } = await supabase.auth.admin.deleteUser(payload.sub);
    // if (deleteError) {
    //   console.error('[delete-account/confirm] Delete failed:', deleteError);
    //   return res.status(500).json({ error: 'Failed to delete account' });
    // }
    //
    // // 可选：清理用户关联数据
    // // await supabase.from('user_data').delete().eq('user_id', payload.sub);
    //
    // return res.status(200).json({ message: 'Account deleted successfully' });

    // ── 当前未配置，返回 400 ──────────────────────────────────────
    return res.status(400).json({
      error: 'Account deletion is not configured yet. Please contact support@arborm.co for assistance.',
    });
  } catch (err) {
    console.error('[delete-account/confirm] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
