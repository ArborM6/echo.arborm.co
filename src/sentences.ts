/**
 * 按句号 / 分号把一段提示拆成短句（中英文文案通用），用于分段显示。
 * 标点保留在各句末尾；拆不出内容时原样返回整段。
 */
export function splitIntoSentences(text: string): string[] {
  const parts = text.match(/[^。；.]+[。；.]?/g) ?? [text];
  return parts.map((part) => part.trim()).filter(Boolean);
}
