<template>
  <form @submit.prevent="onSubmit">
    <h5>1. Información del nuevo producto o cambio importante (NPCI)</h5>
    <div class="mb-5">
      <label><strong>1.1. Clasificación*</strong></label>
      <select
        class="form-select"
        v-model="informe.informeDet.tipoInforme"
        name="tipoInforme"
        v-validate="'required'"
        @change="onClasificacion"
      >
        <option selected disabled value="">Seleccione</option>
        <option v-for="item in tipoInforme" :key="item.key" :value="item.key">
          {{ item.value }}
        </option>
      </select>
      <div class="invalid-feedback">El campo es requerido.</div>
    </div>
    <div class="mb-5">
      <label>
        <strong> 1.2. Nombre del nuevo producto o cambio importante* </strong>
      </label>
      <input
        type="text"
        class="form-control"
        v-model="informe.informeDet.nombreNpci"
        v-validate="'required'"
        name="nombreNpci"
      />
      <div class="invalid-feedback">El campo es requerido.</div>
    </div>
    <div class="mb-5">
      <label>
        <strong>
          1.3. Antecedentes y/o problemática que se busca resolver con el NPCI
        </strong>
      </label>
      <textarea
        class="form-control"
        rows="3"
        v-model="informe.informeDet.antecendentes"
      ></textarea>
    </div>
    <div class="mb-5">
      <label>
        <strong>
          1.4. Descripción del nuevo producto o cambio importante*
        </strong>
      </label>
      <p class="m-0">
        Nuevo producto: incluir descripción del producto, proceso operativo
        asociado, canales y mercado objetivo.
      </p>
      <p>
        Cambio importante: breve descripción del cambio, indicando el objetivo
        que la empresa busca alcanzar
      </p>
      <textarea
        class="form-control"
        rows="3"
        v-model="informe.informeDet.descripcion"
        v-validate="'required'"
        name="descripcion"
      ></textarea>
      <div class="invalid-feedback">El campo es requerido.</div>
      <p>
        En caso amerita, adjuntar (i) manual del producto y/o (ii) el flujograma
        del nuevo proceso indicado
      </p>
      <button class="btn btn-link p-0 m-0" type="button" @click="onClick">
        Adjuntar archivo
      </button>
    </div>
    <div class="mb-5">
      <label>
        <strong>
          1.5. Descripción del soporte informático relacionado al nuevo producto
          o cambio importante
        </strong>
      </label>
      <p>
        En caso el NPCI implique cambios en el ambiente informático o
        adquisición de nuevas tecnologías, describir la arquitectura tecnológica
        que dará soporte al cambio importante o nuevo producto y los proveedores
        involucrados.
      </p>
      <textarea
        class="form-control"
        rows="3"
        v-model="informe.informeDet.descripcionSop"
      ></textarea>

      <p>Adjuntar esquema o documentación de sustento adicional</p>
      <button class="btn btn-link p-0 m-0" type="button" @click="onClick">
        Adjuntar archivo
      </button>
    </div>
    <div class="mb-5 row">
      <label class="col-auto">
        <strong> {{ labelFecha }} </strong>
      </label>
      <div class="col-auto">
        <input
          type="date"
          class="form-control"
          v-model="informe.informeDet.fecLanzImpl"
          v-validate="'required|date_format:yyyy-MM-dd'"
          name="fecLanzImpl"
        />
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
    </div>

    <label>
      <strong>1.7. Checklist</strong>
    </label>
    <p>Indicar si el NPCI implica algún impacto en los siguientes aspectos:</p>
    <div class="mb-3 row justify-content-end">
      <div class="col-5">Precise brevemente su respuesta</div>
    </div>
    <div class="mb-3 row" v-for="impacto in implicaImpacto" :key="impacto.key">
      <div class="col-1">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="impacto.selected"
            :id="impacto.key"
          />
        </div>
      </div>
      <div class="col-6">
        <label :for="impacto.key"> {{ impacto.value }} </label>
      </div>
      <div class="col-5">
        <input
          type="text"
          class="form-control"
          v-validate="{
            required: impacto.selected,
          }"
          :name="impacto.key"
          v-model="impacto.comment"
        />
      </div>
    </div>
    <p>El NPCI incorpora alguno de los siguientes aspectos:</p>
    <div
      class="mb-3 row"
      v-for="aspecto in incorporaAspecto"
      :key="aspecto.key"
    >
      <div class="col-1">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="aspecto.selected"
            :id="aspecto.key"
          />
        </div>
      </div>
      <div class="col-6">
        <label :for="aspecto.key"> {{ aspecto.value }} </label>
      </div>
      <div class="col-5">
        <input
          type="text"
          class="form-control"
          v-validate="{
            required: aspecto.selected,
          }"
          :name="aspecto.key"
          v-model="aspecto.comment"
        />
      </div>
    </div>

    <h5 class="my-5">2. Informe integral de riesgos</h5>
    <label>
      <strong>2.1. Tipos de riesgos asociados*</strong>
    </label>
    <p>
      Seleccione los riesgos que han sido evaluados en el marco del lanzamiento
      del nuevo producto o el desarrollo e implementación del cambio importante
    </p>
    <div class="mb-3 row">
      <div class="col-4" v-for="riesgo in riesgosEvaluados" :key="riesgo.key">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            v-model="riesgo.selected"
            :id="riesgo.key"
            @change="changeRiesgosAsociados()"
            :class="{ 'is-invalid': riesgosAsociados }"
          />
          <label class="form-check-label" :for="riesgo.key">
            {{ riesgo.value }}
          </label>
        </div>
      </div>
    </div>
    <p>Adicionalmente, seleccione las opciones que correspondan:</p>

    <div
      class="form-check"
      v-for="opcion in opcionesCorrespondan"
      :key="opcion.key"
    >
      <input
        class="form-check-input"
        type="checkbox"
        v-model="opcion.selected"
        :id="opcion.key"
        @change="changeRiesgosAsociados()"
        :class="{ 'is-invalid': riesgosAsociados }"
      />
      <label class="form-check-label" :for="opcion.key">
        {{ opcion.value }}
      </label>
    </div>
    <div v-if="riesgosAsociados" class="text-danger form-text">
      El campo es requerido.
    </div>
    <div class="my-5">
      <label>
        <strong>2.2. Riesgos asociados con la gestión del proyecto</strong>
      </label>
      <tabla-riesgos-asociados :id="'tableOne'" :gestionProdProy="'gestionProdProyOne'" />
    </div>
    <div class="mb-5">
      <label>
        <strong>2.3. Riesgos del nuevo producto o cambio importante</strong>
      </label>
      <tabla-riesgos-asociados :id="'tableTwo'" :gestionProdProy="'gestionProdProyTwo'" />
    </div>
    <div class="mb-5">
      <label>
        <strong>2.4. Informe detallado de riesgos de LAFT</strong>
      </label>
      <p>
        Cargue copia del informe detallado de riesgos LAFT elaborado por el
        oficial de cumplimiento de la entidad
      </p>
      <button class="btn btn-link p-0 m-0" type="button" @click="onClick">
        Adjuntar archivo
      </button>
    </div>
    <div class="mb-5">
      <label class="d-block">
        <strong>2.5. Aspectos evaluados de controles de mercado</strong>
      </label>
      <tabla-aspectos-evaluados />
    </div>

    <h5>3. Aprobación del informe de riesgo</h5>
    <div class="mb-3">
      <label>
        Resumen de los principales acuerdos tomados por el comité de riesgo o
        comité especializado*
      </label>
      <textarea
        class="form-control"
        rows="3"
        v-model="informe.informeDet.aprobInforme"
        v-validate="'required'"
        name="aprobInforme"
      ></textarea>
    </div>

    <div class="mb-3 row align-items-center">
      <label class="col-auto">
        Acta del comité de riesgos que aprobó el informe de riesgo*
      </label>
      <div class="col-auto">
        <button class="btn btn-link m-0 p-0" type="button" @click="onClick">
          Adjuntar archivo (.pdf)
        </button>
      </div>
    </div>
    <div class="mb-5 row align-items-center">
      <label class="col-auto">
        Fecha de aprobación del informe por parte del comité de riesgos*
      </label>
      <div class="col-auto">
        <input
          type="date"
          class="form-control"
          v-model="informe.informeDet.fecAprob"
          v-validate="'required|date_format:yyyy-MM-dd'"
          name="fecAprob"
        />
      </div>
    </div>

    <h5>4. Comentarios adicionales</h5>
    <div class="mb-5">
      <textarea
        class="form-control"
        rows="3"
        v-model="informe.informeDet.comentAdic"
        v-validate="'required'"
        name="comentAdic"
      ></textarea>

      <button class="btn btn-link p-0 m-0" type="button" @click="onClick">
        Adjuntar archivo
      </button>
    </div>

    <h5>5. Asociación con un informe previo</h5>

    <div class="form-control-custom mb-3">
      <div class="d-flex align-items-center flex-wrap container-badge">
        <span
          v-for="item in associates"
          :key="item.idInforme"
          class="badge bg-info text-dark rounded-pill d-inline-block my-1 me-1"
        >
          <span class="d-inline-block me-1"> {{ item.nombreNpci }} </span>
          <button
            type="button"
            class="btn-close"
            @click="onDelete(item)"
          ></button>
        </span>
      </div>
    </div>
    <tabla-historico />
    <h5>6. Datos de contacto</h5>
    <div class="mb-3 row align-items-center justify-content-center">
      <label class="col-2"> Nombre* </label>
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          v-model="informe.contacto.nombre"
          v-validate="'required'"
          name="nombre"
        />
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
    </div>
    <div class="mb-3 row align-items-center justify-content-center">
      <label class="col-2"> Cargo* </label>
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          v-model="informe.contacto.cargo"
          v-validate="'required'"
          name="cargo"
        />
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
    </div>
    <div class="mb-3 row align-items-center justify-content-center">
      <label class="col-2"> Teléfono* </label>
      <div class="col-6">
        <input
          type="text"
          class="form-control"
          v-model="informe.contacto.telefono"
          v-validate="'required'"
          name="telefono"
        />
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
    </div>
    <div class="mb-5 row align-items-center justify-content-center">
      <label class="col-2"> Correo* </label>
      <div class="col-6">
        <input
          type="email"
          class="form-control"
          v-model="informe.contacto.correo"
          v-validate="'required|email'"
          name="correo"
        />
        <div class="invalid-feedback">El campo es requerido.</div>
      </div>
    </div>

    <input type="file" class="d-none" name="" ref="file" />

    <div class="row d-flex justify-content-end gx-2">
      <div class="col-auto">
        <button type="button" class="btn btn-primary" @click="onSave">
          Guardar
        </button>
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-success">Enviar</button>
      </div>
      <div class="col-auto">
        <button type="button" class="btn btn-danger">Cancelar</button>
      </div>
    </div>
  </form>
</template>

<script>
import TablaAspectosEvaluados from "./TablaAspectosEvaluados.vue";
import TablaRiesgosAsociados from "./TablaRiesgosAsociados.vue";
import { mapState, mapActions } from "vuex";
import TablaHistorico from "./TablaHistorico.vue";
export default {
  name: "FormularioInforme",
  components: {
    TablaRiesgosAsociados,
    TablaAspectosEvaluados,
    TablaHistorico,
  },
  data() {
    return {
      labelFecha: "1.6. Fecha de lanzamiento del nuevo producto*",
      riesgosAsociados: false,
      formSubmitAttempt: false,
    };
  },
  computed: {
    ...mapState("crear", [
      "informe",
      "tipoInforme",
      "implicaImpacto",
      "incorporaAspecto",
      "riesgosEvaluados",
      "opcionesCorrespondan",
    ]),
    ...mapState("listar", ["associates"]),
  },
  methods: {
    ...mapActions("listar", ["removeAssociation"]),
    ...mapActions("crear", ["saveInforme"]),
    onClasificacion() {
      console.log(this.informe.informeDet.tipoInforme)
      if (this.informe.informeDet.tipoInforme === "001000") {
        this.labelFecha = "1.6. Fecha de lanzamiento del nuevo producto*";
      } else {
        this.labelFecha =
          "1.6. Fecha estimada de implementación del cambio importante*";
      }
    },
    changeRiesgosAsociados() {
      if (this.formSubmitAttempt) {
        const riesgosE = !this.riesgosEvaluados.find(
          (element) => element.selected
        );
        const opcionesC = !this.opcionesCorrespondan.find(
          (element) => element.selected
        );
        this.riesgosAsociados = riesgosE && opcionesC;
      }
    },
    onClick() {
      this.$refs.file.click();
    },
    onDelete(item) {
      this.removeAssociation(item);
    },
    async onSubmit() {
      this.formSubmitAttempt = true;
      const riesgosE = !this.riesgosEvaluados.find(
        (element) => element.selected
      );
      const opcionesC = !this.opcionesCorrespondan.find(
        (element) => element.selected
      );
      this.riesgosAsociados = riesgosE && opcionesC;
      const result = await this.$validator.validateAll();
      if (result && !this.riesgosAsociados) {
        console.log("onSubmit");
        this.saveInforme();
      }
    },
    async onSave() {
      console.log("onSave");
      this.saveInforme(this.associates);
    },
  },
};
</script>

<style scoped>
.form-control-custom {
  display: block;
  width: 100%;
  padding: 3px 12px;
  background-color: #fff;
  border: 1px solid #ced4da;
  border-radius: 4px;
}
.container-badge {
  min-height: 30px;
}
.btn-close {
  height: 0.5rem;
  width: 0.5rem;
  padding: 0;
}
</style>
