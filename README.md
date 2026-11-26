# Foto na Planta

App web (PWA) para levantamento fotográfico em campo sobre plantas em PDF.

- Biblioteca de PDFs guardada no aparelho (várias páginas por PDF)
- Fotos e vídeos marcados na planta com posição e direção (bússola ou ajuste manual)
- Trajeto desenhado para vídeos, calibração por GPS
- Relatório PDF e pacote .zip (fotos, plantas marcadas, planilha CSV, backup)

Tudo fica salvo localmente no navegador (IndexedDB). Nada é enviado para servidor.

Para instalar no Android: abra o link do GitHub Pages no Chrome e toque em "Instalar app".

## App Android (.apk)

Baixe pelo celular: https://guilhermefrigo.github.io/foto-na-planta/foto-na-planta.apk

O APK é gerado pelo GitHub Actions (`.github/workflows/apk.yml`, projeto Trusted Web Activity) e assinado fora do repositório. A chave de assinatura não fica aqui.
