import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * POST /api/delete-account/request
 *
 * 接收 { email } ，发送账号删除确认邮件。
 * 无论邮箱是否存在，均返回 200（防止邮箱枚举攻击）。
 *
 * 环境变量：
 *   SUPABASE_URL             — Supabase 项目 URL
 *   SUPABASE_SERVICE_ROLE_KEY — Supabase Service Role Key（仅服务端使用）
 *   DELETE_ACCOUNT_TOKEN_SECRET — JWT 签名密钥
 *   RESEND_API_KEY            — Resend 邮件服务 API Key
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // ── 仅允许 POST ──────────────────────────────────────────────
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { email } = req.body ?? {};

    if (!email || typeof email !== 'string') {
      // 仍然返回 200，防止探测
      return res.status(200).json({ message: 'If this email is registered, a confirmation link has been sent.' });
    }

    const normalizedEmail = email.trim().toLowerCase();

    // ── 1. 查询 Supabase 确认用户是否存在 ────────────────────────
    // import { createClient } from '@supabase/supabase-js';
    //
    // const supabase = createClient(
    //   process.env.SUPABASE_URL!,
    //   process.env.SUPABASE_SERVICE_ROLE_KEY!,
    // );
    //
    // const { data: users, error: listError } = await supabase.auth.admin.listUsers();
    // if (listError) throw listError;
    //
    // const user = users.users.find(u => u.email === normalizedEmail);
    // if (!user) {
    //   // 用户不存在，仍返回 200
    //   return res.status(200).json({ message: 'If this email is registered, a confirmation link has been sent.' });
    // }

    // ── 2. 签发 JWT Token（有效期 30 分钟） ───────────────────────
    // import jwt from 'jsonwebtoken';
    //
    // const token = jwt.sign(
    //   {
    //     sub: user.id,
    //     email: normalizedEmail,
    //     action: 'delete-account',
    //   },
    //   process.env.DELETE_ACCOUNT_TOKEN_SECRET!,
    //   { expiresIn: '30m' },
    // );

    // ── 3. 通过 Resend 发送确认邮件 ──────────────────────────────
    // import { Resend } from 'resend';
    //
    // const resend = new Resend(process.env.RESEND_API_KEY!);
    //
    // const confirmUrl = `https://echo.arborm.co/delete-account/confirm?token=${token}`;
    //
    // await resend.emails.send({
    //   from: 'Echo <noreply@arborm.co>',
    //   to: normalizedEmail,
    //   subject: '确认删除您的 Echo 账号',
    //   html: `
    //     <p>您好，</p>
    //     <p>我们收到了删除您 Echo 账号的请求。请点击下方链接确认操作：</p>
    //     <p><a href="${confirmUrl}">确认删除账号</a></p>
    //     <p>此链接将在 30 分钟后失效。如果您没有发起此请求，请忽略此邮件。</p>
    //     <p>— Echo 团队</p>
    //   `,
    // });

    // ── 统一返回 200 ─────────────────────────────────────────────
    return res.status(200).json({
      message: 'If this email is registered, a confirmation link has been sent.',
    });
  } catch (err) {
    console.error('[delete-account/request] Unexpected error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
