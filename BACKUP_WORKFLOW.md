## Git Backup Workflow

Bu proje icin temel yedek akisi:

1. Calismaya baslamadan once durumu kontrol et:
   `git status`
2. Yeni bir safhaya gecmeden once degisiklikleri kaydet:
   `git add .`
   `git commit -m "Phase checkpoint: kisa-aciklama"`
3. Kritik donum noktalarinda etiket koy:
   `git tag phase-01-baseline`
4. Uzak repo bagliysa yedegi gonder:
   `git push origin main`
   `git push origin --tags`

## Onerilen Commit Mesajlari

- `Baseline backup before next phase`
- `Phase checkpoint: auth screens completed`
- `Phase checkpoint: dashboard skeleton completed`
- `Hotfix: login redirect corrected`

## Kisa Kurallar

- Buyuk degisikliklerden hemen once commit at.
- Calisir haldeki her safha sonunda commit at.
- `.env.local`, `node_modules`, `.next` gibi dosyalari repoya alma.
- Kritik safhalarda hem `.zip` hem Git commit kullan.