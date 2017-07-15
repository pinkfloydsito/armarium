from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View, TemplateView
from react.render import render_component
import os
from django.conf import settings


class DashboardView(TemplateView):
    template_name = 'dashboard.html'

    def get_context_data(self, **kwargs):
        context = super(DashboardView, self).get_context_data(**kwargs)
        user = self.request.user
        context['user'] = user
        return context


class FormView(TemplateView):
    template_name = 'form.html'
    path = os.path.abspath(os.path.join(settings.BASE_DIR,
                                        '..',
                                        'armarium.renderer/src',
                                        'form.js'))
    store = {'component': 'form.js'}
    store['props'] = {'toWhat': 'me'}
    rendered = render_component(
        path, {
            'toWhat': 'me',
        },
        to_static_markup=True,
    )

    def get_context_data(self, **kwargs):
        context = super(FormView, self).get_context_data(**kwargs)
        context['data'] = {
            'rendered': self.rendered,
            'store': self.store
        }
        return context
