<template>
<section class="contacts" id="contacts">
  <div class="contacts__container">
    <div class="contacts__info-wrapper">
      <h2 class="contacts__header section-title">Связаться со мной</h2>
      <p class="contacts__paragraph">Буду благодарен за обратную связь по проектам. Пишите или звоните, буду рад сотрудничеству.</p>
      <Button
        :name="'Скачать резюме'"
      />
    </div>
    <div class="contacts__socials-wrapper socials">
      <ul class="socials__list">
        <li class="socials__item">
          <img class="socials__svg-icon" src="@/static/svg/email-icon.svg" alt="icon">
          <a class="socials__link" href="mailto:vladimir.garbuzzov@yandex.ru">vladimir.garbuzzov@yandex.ru</a>
        </li>
        <li class="socials__item">
          <img class="socials__svg-icon" src="@/static/svg/phone-icon.svg" alt="icon">
          <a class="socials__link" href="tel:+79055062020">+7 905 506-20-20</a>
        </li>
        <li class="socials__item">
          <img class="socials__svg-icon" src="@/static/svg/telegram-icon.svg" alt="icon">
          <a class="socials__link" href="https://t.me/vladimir_garbuzov" target="_blank">@vladimir_garbuzov</a>
        </li>
        <li class="socials__item">
          <img class="socials__svg-icon" src="@/static/svg/github-icon.svg" alt="icon">
          <a class="socials__link socials__link--github" href="https://github.com/Vladimir2011" target="_blank">https://github.com/Vladimir2011</a>
        </li>
      </ul>
    </div>
  </div>
</section>
</template>

<script>
import Button from '@/components/Button'

export default {
  components: { Button }
}
</script>
